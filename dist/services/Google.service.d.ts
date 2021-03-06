export interface Query {
    language: string;
    key: string;
    types: 'address' | 'geocode' | '(cities)' | 'establishment' | 'geocode|establishment';
    components?: string;
    radius?: string;
    lat?: number;
    lng?: number;
}
export interface GoogleLocationDetailResult {
    adr_address: string;
    formatted_address: string;
    icon: string;
    id: string;
    name: string;
    place_id: string;
    scope: string;
    reference: string;
    url: string;
    utc_offset: number;
    vicinity: string;
    types: string[];
    geometry: {
        location: {
            lat: number;
            lng: number;
        };
        viewport: {
            [type: string]: {
                lat: number;
                lng: number;
            };
        };
    };
    address_components: Array<{
        long_name: string;
        short_name: string;
        types: string[];
    }>;
}
export interface GoogleLocationResult {
    description: string;
    id: string;
    matched_substrings: Array<{
        length: number;
        offset: number;
    }>;
    place_id: string;
    reference: string;
    structured_formatting: {
        main_text: string;
        secondary_text: string;
        main_text_matched_substrings: Array<{
            length: number;
        }>;
    };
    terms: Array<{
        offset: number;
        value: string;
    }>;
    types: string[];
}
export declare class GoogleService {
    static _search(term: string, query: Query): Promise<{
        predictions: GoogleLocationResult[];
        status: string;
    }>;
    static _searchDetails(placeid: string, query: Query): Promise<GoogleLocationDetailResult>;
}
