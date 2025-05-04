import {CompanyClaimOverviewDto} from "@/lib/api/companyClaims/companyClaimsApiDtos";

export const companyClaimOverviews: CompanyClaimOverviewDto[] = [
    // User 1: Has all claimIds (1, 2, 3)
    { userCompanyClaimId: 1, userId: 101, userFirstName: "Jan", userLastName: "Testowy", userEmail: "jankowalski9226@localmail.com", claimId: 1 },
    { userCompanyClaimId: 2, userId: 101, userFirstName: "Jan", userLastName: "Testowy", userEmail: "jankowalski9226@localmail.com", claimId: 2 },
    { userCompanyClaimId: 3, userId: 101, userFirstName: "Jan", userLastName: "Testowy", userEmail: "jankowalski9226@localmail.com", claimId: 3 },

    // User 2: Has claimIds 2 and 3
    { userCompanyClaimId: 4, userId: 102, userFirstName: "Anna", userLastName: "Nowak", userEmail: "anna.nowak@example.pl", claimId: 2 },
    { userCompanyClaimId: 5, userId: 102, userFirstName: "Anna", userLastName: "Nowak", userEmail: "anna.nowak@example.pl", claimId: 3 },

    // User 3: Has claimIds 2 and 3
    { userCompanyClaimId: 6, userId: 103, userFirstName: "Piotr", userLastName: "Wiśniewski", userEmail: "piotr.wisniewski@example.pl", claimId: 2 },
    { userCompanyClaimId: 7, userId: 103, userFirstName: "Piotr", userLastName: "Wiśniewski", userEmail: "piotr.wisniewski@example.pl", claimId: 3 },

    // User 4: Has only claimId 3
    { userCompanyClaimId: 8, userId: 104, userFirstName: "Katarzyna", userLastName: "Zielińska", userEmail: "katarzyna.zielinska@example.pl", claimId: 3 },

    // User 5: Has only claimId 3
    { userCompanyClaimId: 9, userId: 105, userFirstName: "Tomasz", userLastName: "Lewandowski", userEmail: "tomasz.lewandowski@example.pl", claimId: 3 },

    // User 7: Has only claimId 3
    { userCompanyClaimId: 12, userId: 107, userFirstName: "Michał", userLastName: "Szymański", userEmail: "michal.szymanski@example.pl", claimId: 3 },

    // User 8: Has claimIds 2 and 3
    { userCompanyClaimId: 13, userId: 108, userFirstName: "Ewa", userLastName: "Kamińska", userEmail: "ewa.kaminska@example.pl", claimId: 2 },
    { userCompanyClaimId: 14, userId: 108, userFirstName: "Ewa", userLastName: "Kamińska", userEmail: "ewa.kaminska@example.pl", claimId: 3 },

    // User 9: Has only claimId 3
    { userCompanyClaimId: 15, userId: 109, userFirstName: "Krzysztof", userLastName: "Wojciechowski", userEmail: "krzysztof.wojciechowski@example.pl", claimId: 3 },

    // User 11: Has only claimId 3
    { userCompanyClaimId: 18, userId: 111, userFirstName: "Marcin", userLastName: "Kaczmarek", userEmail: "marcin.kaczmarek@example.pl", claimId: 3 },

    // User 12: Has claimIds 2 and 3
    { userCompanyClaimId: 19, userId: 112, userFirstName: "Joanna", userLastName: "Piotrowska", userEmail: "joanna.piotrowska@example.pl", claimId: 2 },
    { userCompanyClaimId: 20, userId: 112, userFirstName: "Joanna", userLastName: "Piotrowska", userEmail: "joanna.piotrowska@example.pl", claimId: 3 },
];