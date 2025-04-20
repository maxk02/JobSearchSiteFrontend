import HomePage from "@/app/page";


export default async function SearchPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
    return <HomePage searchParams={searchParams} />;
}