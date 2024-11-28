export const submitURL = async (url: string) => {
    const response = await fetch(`https://user-classifier-api.onrender.com/api/scrape`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
    });
    
    if (!response.ok) {
        throw new Error("Failed to submit URL");
    }
    
    return response.json();
};

export const submitVote = async (id: number) => {
    const response = await fetch(`https://user-classifier-api.onrender.com/api/vote`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
    });

    return response.json();
};