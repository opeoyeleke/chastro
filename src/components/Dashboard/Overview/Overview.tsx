import React, { FC } from "react";
import { connect } from "react-redux";

import { RootState } from "./../../../redux/root-reducer";
import { CurrentUser } from "./../../../redux/user/user.types";

interface OverviewProps {
  currentUser: CurrentUser;
}

const Overview: FC<OverviewProps> = ({ currentUser }) => {
  return (
    <div>
      {" "}
      Hello {currentUser?.displayName?.split(" ").slice(0, -1).join(" ")}!
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Overview);
