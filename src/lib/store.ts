import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AdminState {
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

export const useAdminStore = create<AdminState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (username, password) => {
        if (username === 'admin' && password === 'admin123') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'admin-storage',
    }
  )
);

interface GalleryState {
  images: Array<{ id: string; url: string; caption: string }>;
  addImage: (image: { url: string; caption: string }) => void;
  removeImage: (id: string) => void;
}

export const useGalleryStore = create<GalleryState>()(
  persist(
    (set) => ({
      images: [],
      addImage: (image) =>
        set((state) => ({
          images: [...state.images, { ...image, id: Date.now().toString() }],
        })),
      removeImage: (id) =>
        set((state) => ({
          images: state.images.filter((img) => img.id !== id),
        })),
    }),
    {
      name: 'gallery-storage',
    }
  )
);

interface AdmissionState {
  applications: Array<{
    id: string;
    fullName: string;
    previousClass: string;
    presentClass: string;
    phoneNumber: string;
    date: string;
  }>;
  addApplication: (application: Omit<AdmissionState['applications'][0], 'id' | 'date'>) => void;
}

export const useAdmissionStore = create<AdmissionState>()(
  persist(
    (set) => ({
      applications: [],
      addApplication: (application) =>
        set((state) => ({
          applications: [
            ...state.applications,
            {
              ...application,
              id: Date.now().toString(),
              date: new Date().toISOString(),
            },
          ],
        })),
    }),
    {
      name: 'admission-storage',
    }
  )
);