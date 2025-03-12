import React from "react";
import { Button } from "./button";

const PomodoroCounter = () => {
    return (
        // main container
        <div className="flex flex-col w-full text-center justify-center space-y-2">
            {/* pomodoro title */}
            <div className="font-bold text-xl text-[#c6b6b6] text-center w-full ">
                <span>Pronto para mais uma sessão de foco?</span>
            </div>
            {/* timer */}
            <div className="flex flex-col">
                {/* pomodoro average focus time */}
                <div className="font-extralight">
                    Sua média de foco atual: 1 hora e 37 minutos
                </div>
                {/* pomodoro timer */}
                <div className="font-bold text-8xl heading-text-gradient">
                    1h37m
                </div>
            </div>
            {/* pomodoro cta */}
            <div className="flex justify-center">
                <Button intent={"primary"}>Começar</Button>
            </div>
        </div>
    );
};

export default PomodoroCounter;
