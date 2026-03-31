import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { ref, getDownloadURL } from 'firebase/storage';
import { db, storage } from '@/lib/firebase';

async function resolveStorageUrl(path: string): Promise<string> {
  try {
    return await getDownloadURL(ref(storage, path));
  } catch {
    return path;
  }
}

function isStoragePath(value: string): boolean {
  return value.startsWith('projects/');
}

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));

    const projects = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const data = doc.data();

        const cover = data.cover && isStoragePath(data.cover)
          ? await resolveStorageUrl(data.cover)
          : data.cover;

        const details = data.details
          ? await Promise.all(
              data.details.map(async (detail: { title: string; description?: string[] }) => {
                const description = detail.description
                  ? await Promise.all(
                      detail.description.map((text: string) =>
                        isStoragePath(text) ? resolveStorageUrl(text) : text,
                      ),
                    )
                  : detail.description;
                return { ...detail, description };
              }),
            )
          : data.details;

        return { id: doc.id, ...data, cover, details };
      }),
    );

    return NextResponse.json(projects);
  } catch (error) {
    console.error('error', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
