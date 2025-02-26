import { redirect } from 'next/navigation';

export default function AccountPage({ params }: { params: { id: string } }) {
    redirect(`/company/${params.id}/manage/profile`);
}
