/**
 * Generic class representing data fetched asynchronously.
 * This class encapsulates the fetched data and the state of the fetch operation.
 */
export class CallData<T>{
    data : T | null = null;
    state: CallState = CallState.LOADING
}

/**
 * Enum representing the state of a fetch operation.
 * It can be LOADING, ERROR, or SUCCESS.
 */
export enum CallState{
    LOADING,
    ERROR,
    SUCCESS
}