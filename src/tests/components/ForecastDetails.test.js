import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from '../../components/ForecastDetails';
import forecast from '../../data/forecast.json';

describe("ForecastDetails", () => {
    const validProps = forecast.forecasts[0];

    it("renders", () => {
    const { asFragment } = render(
      <ForecastDetails
    forecasts = {validProps}
      />
    );

    expect(asFragment()).toMatchSnapshot();
    })
});