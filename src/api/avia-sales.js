export async function fetchSearchId() {
  try {
    const response = await fetch("https://front-test.beta.aviasales.ru/search");
    const { searchId } = await response.json();
    return searchId;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

export async function fetchTickets(searchId) {
  try {
    let isRequestOk = false;
    let finalResponse = null;

    while (!isRequestOk) {
      const res = await fetch(
        `https://front-test.beta.aviasales.ru/tickets?searchId=${searchId}`
      );

      isRequestOk = res.ok;
      finalResponse = res;
    }

    const data = await finalResponse.json();

    // console.log(data.tickets[0].segments[0].stops);

    return data;
  } catch (e) {
    console.log(e);
    throw e;
  }
}
