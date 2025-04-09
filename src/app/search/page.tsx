import HomePage from "@/app/page";


export default async function SearchPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    return <HomePage searchParams={searchParams} />;
}