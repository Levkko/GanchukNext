// utils/getProjectImages.ts
import fs from 'fs';
import path from 'path';

export function getProjectImages(projectFolder: string): { src: string; alt: string }[] {
  const directoryPath = path.join(process.cwd(), 'public', projectFolder);

  try {
    const files = fs.readdirSync(directoryPath);

    const filteredFiles = files.filter(file => !file.startsWith('top-image'));

    return filteredFiles.map((file) => ({
      src: `${projectFolder}/${file}`,
      alt: `Image ${file}`,
    }));
  } catch (error) {
    console.error('Error reading directory:', error);
    return [];
  }
}