import getCurrencySign from "@/lib/functions/currencySigns";
import getUnitOfTimeSign from "@/lib/functions/unitOfTimeSigns";
import {JobSalaryInfoDto} from "@/lib/api/jobs/jobsApiDtos";

export default function formatSalaryInfoText(jobSalaryInfoDto: JobSalaryInfoDto): string | null {

    let result: string = "";

    if (jobSalaryInfoDto.minimum && jobSalaryInfoDto.maximum) {
        result += `${jobSalaryInfoDto.minimum}-${jobSalaryInfoDto.maximum}`;
    }
    else if (jobSalaryInfoDto.minimum) {
        result += `od ${jobSalaryInfoDto.minimum}`;
    }
    else if (jobSalaryInfoDto.maximum) {
        result += `do ${jobSalaryInfoDto.maximum}`;
    }
    else {
        return null;
    }

    if (jobSalaryInfoDto.currencyId) {
        // result += ` ${getCurrencySign(jobSalaryInfoDto.currency)}`; todo
        result += ' zł';
    }
    else {
        return null;
    }

    if (jobSalaryInfoDto.isAfterTaxes !== null) {
        result += ` ${jobSalaryInfoDto.isAfterTaxes ? "netto" : "brutto"}`;
    }

    if (jobSalaryInfoDto.unitOfTime === "Hour") {
        result += ' / godz.';
    }
    else if (jobSalaryInfoDto.unitOfTime === "Month") {
        result += ' / mies.';
    }
    else if (jobSalaryInfoDto.unitOfTime === "Year") {
        result += ' / rok';
    }
    else {
        return null;
    }

    return result;
}