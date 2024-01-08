import React, { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Navbar from "./pages/Navbar/Navbar";
// import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
import Footer from "./pages/Footer/Footer";
import "./App.scss";
// import Auth from "./pages/Auth/Auth";
import Form from "./pages/Form/Form";
import { saveuser, logout } from "./features/User";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import PrivacyPolicy from "./Components/PrivacyPolicy";
// import ProtectedRoute from "./Components/ProtectedRoute";
import Spinnerf from "./Components/Spinnerf";
// import PrivateRoute from "./Components/PrivateRoute";
// import OtpProtected from "./Components/OtpProtected";
import { Navigate } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import StrategicConsulting from "./pages/StrategyConsulting/StrategicConsulting";
// import Services from "./pages/Services/Services";
// import BrandManagement from "./pages/StrategyConsulting/BusinessGrowthStrategy/BrandManagement/BrandManagement";
// import BusinessStrategyandPortfolioAssessment from "./pages/StrategyConsulting/BusinessGrowthStrategy/BusinessStrategyandPortfolioAssessment/BusinessStrategyandPortfolioAssessment";
// import BusinessUnitstrategy from "./pages/StrategyConsulting/BusinessGrowthStrategy/BusinessUnitstrategy/BusinessUnitstrategy";
// import BusinessValuation from "./pages/StrategyConsulting/BusinessGrowthStrategy/BusinessValuation/BusinessValuation";
// import Divestiture from "./pages/StrategyConsulting/BusinessGrowthStrategy/Divestiture/Divestiture";
// import GeographicalExpansion from "./pages/StrategyConsulting/BusinessGrowthStrategy/GeographicalExpansion/GeographicalExpansion";
// import GrowthFacilitation from "./pages/StrategyConsulting/BusinessGrowthStrategy/GrowthFacilitation/GrowthFacilitation";
// import IPOstrategyforsmallandmediumenterprises from "./pages/StrategyConsulting/BusinessGrowthStrategy/IPOstrategyforsmallandmediumenterprises/IPOstrategyforsmallandmediumenterprises";
// import MergersandAcquisitions from "./pages/StrategyConsulting/BusinessGrowthStrategy/MergersandAcquisitions/MergersandAcquisitions";
// import PlanningForGrowth from "./pages/StrategyConsulting/BusinessGrowthStrategy/PlanningForGrowth/PlanningForGrowth";
// import PortfolioEvaluation from "./pages/StrategyConsulting/BusinessGrowthStrategy/PortfolioEvaluation/PortfolioEvaluation";
// import StrategisingFundraiseforgrowth from "./pages/StrategyConsulting/BusinessGrowthStrategy/StrategisingFundraiseforgrowth/StrategisingFundraiseforgrowth";
// import DigitalTransformation from "./pages/StrategyConsulting/OperationalExcellence/DigitalTransformation/DigitalTransformation";
// import ESOPAdvisory from "./pages/StrategyConsulting/OperationalExcellence/ESOPAdvisory/ESOPAdvisory";
// import HumanCapital from "./pages/StrategyConsulting/OperationalExcellence/HumanCapital/HumanCapital";
// import HumanResources from "./pages/StrategyConsulting/OperationalExcellence/HumanResources/HumanResources";
// import InternalControlandProcessImprovement from "./pages/StrategyConsulting/OperationalExcellence/InternalControlandProcessImprovement/InternalControlandProcessImprovement";
// import RiskManagement from "./pages/StrategyConsulting/OperationalExcellence/RiskManagement/RiskManagement";
// import SustainabilityconsultingcoveringESG from "./pages/StrategyConsulting/OperationalExcellence/SustainabilityconsultingcoveringESG/SustainabilityconsultingcoveringESG";
// import OutsourceCFO from "./pages/Services/OutsourceCFO";
// import Fundraising from "./pages/Services/Fundraising";
import Consulting from "./pages/Consulting/Consulting";
import FractionalCFOservices from "./pages/FractionaCFOservices/FractionalCFOservices";
import InvestmentBanking from "./pages/InvestmentBanking/InvestmentBanking";
import Partners from "./pages/About/Partners";
import Work from "./pages/About/Work";
import AboutUs from "./pages/About/AboutUs";
import Approach from "./pages/About/Approach";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
  // const dispatch = useDispatch();
  // const user = JSON.parse(localStorage.getItem("user"));
  // const userdata = useSelector((state) => state.user.user);

  // useEffect(() => {
  //   if (user) {
  //     dispatch(
  //       saveuser({
  //         email: user.email,
  //         token: user.token,
  //         username: user.username,
  //         isVerified: user.isVerified,
  //       })
  //     );
  //   }
  // }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/about-us" element={<AboutUs />} />
        <Route path="/about/our-partners" element={<Partners />} />
        <Route path="/about/our-work" element={<Work />} />
        <Route path="/about/our-approach" element={<Approach />} />
        {/* 
        <Route
          path="/signup"
          element={
            <PrivateRoute>
              <Signup />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/login"
          element={
            <PrivateRoute>
              <Login />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/auth"
          element={
            <OtpProtected>
              <Auth />
            </OtpProtected>
          }
        /> */}
        <Route path="/form" element={<Form />} />

        <Route path="/consulting" element={<Consulting />} />
        <Route
          path="/fractional-CFO-services"
          element={<FractionalCFOservices />}
        />
        <Route path="/investment-banking" element={<InvestmentBanking />} />

        {/* <Route
          path="/consulting/planning-for-growth"
          element={<PlanningForGrowth />}
        />
        <Route
          path="/consulting/business-unit-strategy"
          element={<BusinessUnitstrategy />}
        />

        <Route
          path="/consulting/portfolio-evaluation"
          element={<PortfolioEvaluation />}
        />

        <Route
          path="/consulting/brand-management"
          element={<BrandManagement />}
        />
        <Route
          path="/consulting/geographical-expansion"
          element={<GeographicalExpansion />}
        />
        <Route
          path="/consulting/mergers-and-acquisitions"
          element={<MergersandAcquisitions />}
        />

        <Route
          path="/consulting/divestiture"
          element={<Divestiture />}
        />
        <Route
          path="/consulting/strategising-fundraise-for-growth"
          element={<StrategisingFundraiseforgrowth />}
        />
        <Route
          path="/consulting/business-valuation"
          element={<BusinessValuation />}
        />
        <Route
          path="/consulting/IPO-strategy-for-small-and-medium-enterprises"
          element={<IPOstrategyforsmallandmediumenterprises />}
        />


        <Route
          path="/consulting/human-capital"
          element={<HumanCapital />}
        />

        <Route
          path="/consulting/internal-control-and-process-improvement"
          element={<InternalControlandProcessImprovement />}
        />

        <Route
          path="/consulting/risk-management"
          element={<RiskManagement />}
        />
        <Route
          path="/consulting/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route
          path="/consulting/sustainability-consulting-covering-ESG"
          element={<SustainabilityconsultingcoveringESG />}
        /> */}

        {/* <Route
          path="/services/outsource-CFO"
          element={<OutsourceCFO />}
        />
        <Route
          path="/services/fundraising"
          element={<Fundraising />}
        /> */}

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
