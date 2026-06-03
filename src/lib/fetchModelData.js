const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL || "https://rd6lgq-8081.csb.app/api"
).replace(/\/$/, "");

function buildRequestUrl(endpoint) {
  if (/^https?:\/\//i.test(endpoint)) {
    return endpoint;
  }

  const normalizedEndpoint = endpoint.startsWith("/")
    ? endpoint
    : `/${endpoint}`;

  return `${API_BASE_URL}${normalizedEndpoint}`;
}

const fetchModel = async (endpoint) => {
  try {
    const response = await fetch(buildRequestUrl(endpoint));

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export default fetchModel;
