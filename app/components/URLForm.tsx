"use client";

import { submitURL } from "../api/api";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUrl, setError, setQuestionData } from '../../redux/slices/formSlice';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

const URLForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const url = useSelector((state: any) => state.form.url);
    const error = useSelector((state: any) => state.form.error);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!url) {
            alert('Please enter a URL');
            return;
        }

        dispatch(setUrl(url));

        try {
            const response = await submitURL(url);

            dispatch(setQuestionData(response));

            router.push('/question');
        } catch (error: any) {
            dispatch(setError(error.message));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center gap-4">
            <Input
                type="url"
                label="URL"
                value={url}
                required
                size="lg"
                className="textArea"
                onChange={(e) => dispatch(setUrl(e.target.value))}
            />
            <Button type="submit" className="button">
                Submit
            </Button>

            {error && <p style={{ color: 'red' }}>{error}</p>}
        </form>
    );
};

export default URLForm;