'use client';

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitVote } from '../api/api';
import { setQuestionData, addAllData, removeAllData } from '../../redux/slices/formSlice';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/react';

const ChoiceForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    const questionData = useSelector((state: any) => state.form.questionData).data;
    const allData = useSelector((state: any) => state.form.allData);

    console.log(questionData)

    const handleVote = async (id: number) => {
        const response = await submitVote(id);

        const existingData = allData.find((item: any) => item.url === response.data.url);

        if (!existingData) {
            dispatch(addAllData(response.data));
        } else {
            dispatch(removeAllData(response.data.url));
            dispatch(addAllData(response.data));
        }

        router.push('/charts');
    }

    const sortedOptions = [...questionData.options].sort((a: any, b: any) => a.id - b.id);

    return (
        <div className="flex flex-col justify-center gap-4">
            <h1 className='textArea'>
                {questionData.question}
            </h1>
            {sortedOptions.map((option: any) => (
                <Button
                    key={option.id}
                    className="button"
                    onClick={() => handleVote(option.id)}
                >
                    {option.option}
                </Button>
            ))}
        </div>
    )
}

export default ChoiceForm;