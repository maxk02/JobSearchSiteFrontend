import { redirect } from 'next/navigation';

export default async function CompanyFoldersPage({ params }: { params: Promise<{ folderId: string }> }) {
    const resolvedParams = await params;
    const { folderId } = resolvedParams;

    redirect(`/folder/${folderId}/jobs`);
}
