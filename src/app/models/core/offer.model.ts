export interface OfferModel{

    id?: string;
    createAt?: Date;
    updateAt?: Date;
    deleteAT?: Date;

    //contractType:
    contractTypeId?: string;
    //company:
    companyId?: string;
    //experienceTime:
    experienceTimeId?: string;
    //location:
    locationId?: string;
    //sector:
    sectorId?: string;
    //state:
    stateId?: string;
    //trainingHours:
    trainingHoursId?: string;
    //workingDay:
    workingDayId?: string;

    activities?: string;
    additionalInformation?: string;
    code?: string;
    contactCellphone?: string;
    contactEmail?: string;
    contactName?: string;
    contactPhone?: string;
    endedAt?: string;
    position?: string;
    renumeration?: string;
    startedAt?: string;
    requirements?: string;
    vacancies?: string;
}


