export function priceListItem(elementPriceList) {
  return {
    packagePrice: elementPriceList.package_price / 100,
    sessionPrice: elementPriceList.session_price / 100,
    courseId: elementPriceList.course_id,
    packageLength: elementPriceList.package_length,
    sessionLength: elementPriceList.session_length * 15,
    oneHourFromPackage:
      elementPriceList.package_price / elementPriceList.package_length / 100,
    pricePerOneHour: (
      ((elementPriceList.session_price / elementPriceList.session_length) * 4) /
      100
    ).toFixed(2),
  };
}
