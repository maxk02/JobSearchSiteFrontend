export interface UserSessionDto {
    tokenId: string;
    firstTimeIssuedUtc: string;
    lastDevice: string | null;
    lastOs: string | null;
    lastClient: string | null;
}