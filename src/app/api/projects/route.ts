import { NextResponse } from 'next/server';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, 'projects'));

    const projects = querySnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error('error', error);
    return NextResponse.json({ error: '500 에러 발생' }, { status: 500 });
  }
}
