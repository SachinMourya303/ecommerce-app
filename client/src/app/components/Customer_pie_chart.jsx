import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const Customer_bar_chart = ({ data }) => {

    const COLORS = ["purple", "#f59e0b", "#10b981", "#6366f1"];

    return (
        <div className="w-full md:w-[70%] mt-5 bg-rose-700 p-5 rounded-lg border-t-5 border-b-5 border-amber-500 transition duration-500">
            <div className="w-full h-70">
                <ResponsiveContainer>
                    <BarChart data={data}>
                        <XAxis dataKey="name" tick={{ fill: "white", fontSize: 14 }} />
                        <YAxis tick={{ fill: "white", fontSize: 14 }} />
                        <Tooltip />

                        <Bar
                            dataKey="value"
                            strokeWidth={2} 
                            radius={[10, 10, 0, 0]} 
                        >
                            {data.map((entry, index) => (
                                <Cell key={index} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Customer_bar_chart;
