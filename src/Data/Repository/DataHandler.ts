import {Subject} from "rxjs";
import {CallData, CallState} from "../CallData";

/**
 * Generic class for handling asynchronous data fetching and creating an observable for the data.
 */
export class DataHandler<T>{
    private readonly fetchData: () => Promise<T>
    private data : Subject<CallData<T>> = new Subject<CallData<T>>()

    /**
     * Constructor for DataHandler.
     * @param fetchData - Function to fetch data asynchronously.
     */
    constructor(fetchData : () => Promise<T>) {
        this.fetchData = fetchData
    }

    // Returns an observable for data changes
    getObservable = this.data.asObservable()

    /**
     * Method to load data asynchronously.
     * Emits data loading state, fetches data, and updates the state accordingly.
     */
    async load() {
        // Create a new CallData instance to represent the loading state
        let result : CallData<T> = new CallData();

        // Notify subscribers about the loading state
        this.data.next(result);


        try{
            // Attempt to fetch data asynchronously
            result.data = await this.fetchData();

            // Update state to indicate successful data loading
            result.state = CallState.SUCCESS;
        }catch (e) {
            console.error('Error loading data:', e);

            // Update state to indicate an error occurred
            result.state = CallState.ERROR;
        }

        // Notify subscribers about the updated data state
        this.data.next(result);
    }

}