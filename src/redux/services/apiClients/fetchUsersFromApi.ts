export const fetchUsersFromApi = async (url: string) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = response.json();
        return data;
    } catch (error: any) {
        throw new Error('Error fetching data from API: ' + error.message);
    }
}