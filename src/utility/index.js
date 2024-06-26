export function formatEmail(email) {
  // Split the email address into parts: username and domain
  const parts = email.split("@");

  // Get the first three characters of the username
  const usernamePrefix = parts[0].slice(0, 3);

  // Get the last two characters of the username
  const usernameSuffix = parts[0].slice(-2);

  // Create the SVG icon for the obscured characters
  const dotSVG = (
    <svg
      viewBox="0 0 24 24"
      role="img"
      aria-hidden="false"
      aria-label="Dot"
      focusable="false"
      style={{
        height: "10px",
        width: "8px",
        display: "inline-block",
        fill: "currentColor",
      }}
    >
      <circle cx="10" cy="12" r="10" fill="currentColor" />
    </svg>
  );

  // Combine the formatted username, SVG icon, and the domain
  const formattedEmail = (
    <span className="text-sm ml-2">
      {usernamePrefix}
      {dotSVG}
      {dotSVG}
      {dotSVG}
      {dotSVG}
      {dotSVG}
      {usernameSuffix}@{parts[1]}
    </span>
  );

  return formattedEmail;
}

export const fetchCountries = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    const countryOptions = data.map((country) => ({
      value:
        country.idd.root +
        (country.idd.suffixes ? country.idd.suffixes[0] : ""),
      label: `${country.name.common} (${country.idd.root}${
        country.idd.suffixes ? country.idd.suffixes[0] : ""
      })`,
    }));
    return countryOptions;
    // setCountries(countryOptions);
  } catch (error) {
    console.error("Error fetching countries:", error);
  }
};
