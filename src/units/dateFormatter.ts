export type DateFormat = "fullDate" | "dateTime" | "monthYear" | "weekdayDate";

export const dateFormatter = (dateString: string, format: DateFormat): string => {
  const date = new Date(dateString);

  const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  switch (format) {
    case "fullDate": {
      const formatter = new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });

      return formatter.format(date).replace(" г.", "");
    }

    case "dateTime": {
      const formatter = new Intl.DateTimeFormat("ru-RU", {
        day: "numeric",
        month: "long",
        hour: "2-digit",
        minute: "2-digit",
      });

      return formatter.format(date).replace(",", "");
    }

    case "monthYear": {
      const formatter = new Intl.DateTimeFormat("ru-RU", {
        month: "long",
        year: "numeric",
      });

      return capitalize(formatter.format(date).replace(" г.", ""));
    }

    case "weekdayDate": {
      const formatter = new Intl.DateTimeFormat("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long",
      });

      return capitalize(formatter.format(date));
    }

    default:
      return "";
  }
};
