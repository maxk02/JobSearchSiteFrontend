import getCurrencySign from "@/lib/functions/currencySigns";
import getUnitOfTimeSign from "@/lib/functions/unitOfTimeSigns";
import {JobSalaryInfoDto} from "@/lib/api/sharedDtos";

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

    if (jobSalaryInfoDto.currency) {
        result += ` ${getCurrencySign(jobSalaryInfoDto.currency)}`;
    }
    else {
        return null;
    }

    if (jobSalaryInfoDto.isAfterTaxes !== null) {
        result += ` ${jobSalaryInfoDto.isAfterTaxes ? "netto" : "brutto"}`;
    }

    if (jobSalaryInfoDto.unitOfTime) {
        result += ` / ${getUnitOfTimeSign(jobSalaryInfoDto.unitOfTime)}`;
    }
    else {
        return null;
    }

    return result;
}