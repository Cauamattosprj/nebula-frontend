import Notebook from "@/components/notebook";
import PomodoroCounter from "@/components/pomodoro-counter";

export default function Home() {
    return (
        <>
            <PomodoroCounter />
            <Notebook />
        </>
    );
}
