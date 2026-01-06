import { redirect } from 'next/navigation';

export default async function ManageJobRedirectionPage({ params }: { params: Promise<{ jobId: string }> }) {
    const resolvedParams = await params;
    const { jobId } = resolvedParams;

    redirect(`/job/${jobId}/manage/applications`);
}
