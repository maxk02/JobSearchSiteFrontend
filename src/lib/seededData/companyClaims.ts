export interface CompanyClaim {
    id: number;
    namePl: string;
    dependencies: number[];
    commentPl: string | null;
}

export const companyClaims: CompanyClaim[] = [
    { id: 1, namePl: "Właściciel", dependencies: [2, 3, 4], commentPl: "Aktywacja spowoduje usunięcie uprawnień właściciela z obecnie zalogowanego konta i włączenie wszystkich uprawnień na koncie docelowym (przekazanie uprawnień właściciela)." },
    { id: 2, namePl: "Administrator", dependencies: [7], commentPl: "Możliwość dodania nowych kont pracowników do firmy oraz zarządzania uprawnieniami zwykłych użytkowników w zakresie zezwolonym dla tego konta." },
    { id: 3, namePl: "Dostęp do statystyk", dependencies: [7], commentPl: "Dostęp do statystyk przeglądów ofert pracy i aplikacji. Wymaga dostępu do ofert pracy." },
    { id: 4, namePl: "Edycja profilu", dependencies: [], commentPl: "Zmiana nazwy, logotypu oraz opisu firmy." },
    { id: 5, namePl: "Zarządzanie rachunkiem", dependencies: [], commentPl: "Możliwość doładowania rachunku firmy i przeglądu transakcji." },
    { id: 6, namePl: "Tworzenie, edycja i usunięcie ofert pracy", dependencies: [7], commentPl: "Wymaga dostępu do ofert pracy." },
    { id: 7, namePl: "Dostęp do ofert pracy", dependencies: [], commentPl: null },
    { id: 8, namePl: "Zarządzanie aplikacjami", dependencies: [7], commentPl: "Wymaga dostępu do ofert pracy." },
];

export const companyClaimIds: number[] = companyClaims.map(c => c.id);