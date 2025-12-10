export default function Progresstracker(tasks) {

    const completedTasks = tasks.filter((task) => task.completed).length;
    const totalTasks = tasks.length;

    const persentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks)*100;

    return (
        <div className="progress-tracker">
            <p>
                {completedTasks} of {totalTasks} task are completed
            </p>
            <div className="progress-bar">
                <div className="progress" style={{width: `${persentage}%`}}>

                </div>
            </div>
        </div>
    )
}