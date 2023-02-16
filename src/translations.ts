type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    DELIVERED: "DELIVERED",
    TICKET_CREATED: "TICKET_CREATED",
    PACKAGE_RECEIVED: "PACKAGE_RECEIVED",
    IN_TRANSIT: "IN_TRANSIT",
    NOT_YET_SHIPPED: "NOT_YET_SHIPPED",
    OUT_FOR_DELIVERY: "OUT_FOR_DELIVERY",
    WAITING_FOR_CUSTOMER_ACTION: "WAITING_FOR_CUSTOMER_ACTION",
    "Cairo Sorting Facility": "Cairo Sorting Facility",
    "Tanta Hub": "Tanta Hub",
  },
  ar: {
    DELIVERED: "تم تسليم الشحنة",
    TICKET_CREATED: "تم إنشاء الشحنة",
    PACKAGE_RECEIVED: "تم إستلام الشحنة من التاجر",
    IN_TRANSIT: "في مرحلة انتقالية",
    NOT_YET_SHIPPED: "لم يتم شحنه بعد",
    OUT_FOR_DELIVERY: "الشحنة خرجت للتسليم",
    WAITING_FOR_CUSTOMER_ACTION: "في إنتظار العميل",
    "Cairo Sorting Facility": "مدينة نصر",
    "Tanta Hub": "طنطا",

  }
};

export function translate<K extends keyof Translations>(key: K, language: keyof Translations): string {
  return translations[language][key];
}