export const dndApi = 'https://www.dnd5eapi.co/api';

export const requestConfig = (method: string, data: any = null) => {
    const config: {
        method: string,
        url: string,
        headers: { [key: string]: string },
        data?: any
    } = {
        method,
        url: dndApi,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    if (data) {
        config.data = JSON.stringify(data);
        config.headers["Content-Type"] = "application/json";
    }

    return config;
};
