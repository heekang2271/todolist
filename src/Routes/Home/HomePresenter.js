import React from "react";
import Loader from "../../Components/Loader";
import Background from "../../Components/Background";
import Blur from "../../Components/Blur";
import Content from "../../Components/Content";

export default ({ bgNum, weatherData, error, weatherLoad, bgLoad, blurLoad, bgOnLoad, blurOnLoad }) => {
    return (
        <>
            <Background bgNum={bgNum} bgOnLoad={bgOnLoad} />
            <Blur bgNum={bgNum} blurOnLoad={blurOnLoad}>
                {weatherLoad || bgLoad || blurLoad ? (
                    <Loader />
                ) : (
                        <Content
                            weatherData={weatherData}
                            error={error}
                        />
                )}
            </Blur>
        </>
    )
}