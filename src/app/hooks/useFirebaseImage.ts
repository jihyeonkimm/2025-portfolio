import { storage } from '@/lib/firebase';
import { ref, getDownloadURL } from 'firebase/storage';
import { useEffect, useState } from 'react';

const useFirebaseImage = (storagePath: string) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!storagePath) {
      setLoading(false);
      return;
    }

    const loadImage = async () => {
      setLoading(true);
      setError(false);
      try {
        const imageRef = ref(storage, storagePath);
        const url = await getDownloadURL(imageRef);
        setImageUrl(url);
      } catch (error) {
        console.error('이미지 로드 실패', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadImage();
  }, [storagePath]);

  return { imageUrl, loading, error };
};

export default useFirebaseImage;
