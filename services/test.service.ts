/**
 * TestService handles test-related operations and API calls.
 */
class TestService {
	/**
	 * Makes a GET request to the test endpoint.
	 * 
	 * @returns A promise that resolves to the response of the test request.
	 */
	test() {
		return fetch("/api/test", {
			method: "GET"
		});
	}
}

export default TestService;
