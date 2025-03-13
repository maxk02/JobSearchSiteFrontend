import { redirect } from 'next/navigation';

export default async function CompanyManagePage({ params }: { params: Promise<{ companyId: string }> }) {
    const resolvedParams = await params;
    const { companyId } = resolvedParams;

    redirect(`/company/${companyId}/manage/profile`);
}
