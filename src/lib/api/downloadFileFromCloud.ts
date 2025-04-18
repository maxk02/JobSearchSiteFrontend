import axios from 'axios';

export default async function downloadFileFromCloud(presignedUrl: string, fileName: string) {
    try {
        const response = await axios.get(presignedUrl, {
            responseType: 'blob', // important for binary files
        });

        // Create a blob from the response
        const url = window.URL.createObjectURL(new Blob([response.data]));

        // Create a temporary link to trigger download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', fileName); // Set desired file name
        document.body.appendChild(link);
        link.click();

        // Clean up
        link.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Error downloading file:', error);
    }
}
