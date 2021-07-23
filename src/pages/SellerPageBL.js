import React, { useContext, useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { useHistory } from "react-router-dom";

import { AuthContext } from "../contexts/Auth";

const GET_SELLER_INFO = gql`
	query GetUser {
		getSellerInfo {
			id
			username
			storename
			address
			location
			createdAt
		}
	}
`;

export default function BL() {
	const { user } = useContext(AuthContext);
	const { loading, error, data: getSellerInfo } = useQuery(GET_SELLER_INFO);

	return { user, loading, error, getSellerInfo };
}
