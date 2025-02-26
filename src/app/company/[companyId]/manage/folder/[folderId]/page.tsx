import { redirect } from 'next/navigation';

export default function CompanyFoldersPage({ params }: { params: { companyId: string, folderId: string } }) {
    redirect(`/company/${params.companyId}/manage/folder/${params.folderId}/jobs`);
}
