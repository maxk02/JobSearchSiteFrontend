import { redirect } from 'next/navigation';

export default async function CompanyFoldersPage({ params }: { params: Promise<{ companyId: string, folderId: string }> }) {
    const resolvedParams = await params;
    const { companyId, folderId } = resolvedParams;

    redirect(`/company/${companyId}/manage/folder/${folderId}/jobs`);
}
