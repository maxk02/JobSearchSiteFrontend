const unitOfTimeSigns: Record<string, string> = {
    Hour: "h",
    Day: "dzień",
    Week: "tydzień",
    Month: "miesiąc",
    Quarter: "kwartał",
    Semester: "semester",
    Year: "rok",
};

export default function getUnitOfTimeSign(unitOfTime: string) {
    return unitOfTimeSigns[unitOfTime] || unitOfTime;
}