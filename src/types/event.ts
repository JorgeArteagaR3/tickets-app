export type EventType = {
    id: string;
    title: string;
    bgType: string;
    bgColor: string;
    bgImage: {
        imagePath?: string;
    };
    bgImageId: string;
    description: string;
    startDate: string;
    endDate: string;
    onSaleDate: string;
    userIds: string[];
    currencyId: string;
    salesVolume: string;
    organiserFeesVolume: string;
    organiserFeeFixed: string;
    organiserFeePercentage: string;
    organiser: string;
    organiserId: string;
    venueName: string;
    venueNameFull: string;
    preOrderDisplayMessage: string;
    postOrderDisplayMessage: string;
    socialShareText: string;
    socialShowFacebook: string;
    socialShowLinkedin: string;
    socialShowTwitter: string;
    socialShowEmail: string;
    isLive: string;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
    barcodeType: string;
    googleTagManagerCode: string;
    socialShowWhatsapp: string;
    checkoutTimeoutAfter: string;
    eventImagePosition: string;
    location: string;
    locationId: string;
    ticket: string;
}