import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { useSelector } from 'react-redux';

const BarGraph = () => {
    const allData = useSelector((state: any) => state.form.allData);

    return (
        <div key="graphs">
            {allData.map((data: any) => (
                <div key={data.url}>
                    <h2 className='textArea'>{data.question}</h2>
                    <h1 className='url'>{data.url}</h1>
                    <BarChart width={900} height={450} data={data.options}>
                        <Bar dataKey="votes" fill="#1985A1" />
                        <XAxis dataKey="option" tick={false} />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                    </BarChart>
                </div>
            ))}
        </div>
    )
}

export default BarGraph;