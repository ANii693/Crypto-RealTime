
import { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../main.jsx";
import { Container, HStack, Radio, RadioGroup } from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";
import CoinCard from "./CoinCard";
import ReactPaginate from "react-paginate";
import "../styles/pagination.css"; 

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");

  const currencySymbol =
    currency === "inr" ? "₹" : currency === "eur" ? "€" : "$";

    const changePage = ({ selected }) => {
      setPage(selected + 1);
      setLoading(true);
    };

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, [currency, page]);

  if (error) return <ErrorComponent message={"Error While Fetching Coins"} />;

  const totalPages = 101;

  

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <RadioGroup value={currency} onChange={setCurrency} p={"8"}>
            <HStack spacing={"4"}>
              <Radio value={"inr"}>INR</Radio>
              <Radio value={"usd"}>USD</Radio>
              <Radio value={"eur"}>EUR</Radio>
            </HStack>
          </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {coins.map((i) => (
              <CoinCard
                id={i.id}
                key={i.id}
                name={i.name}
                price={i.current_price}
                img={i.image}
                symbol={i.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>

          <HStack w={"full"}  p={"8"} justifyContent={'center'} transform={["scale(0.6)","scale(0.8)"]}>
          <ReactPaginate
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              containerClassName={"pagination"}
              activeClassName={"pagination-link-active"}
              pageClassName={"pagination-item"}
              onPageChange={changePage}
              forcePage={page - 1}
              disableInitialCallback={true}
              pageLinkClassName={"pagination-link"}
              previousLinkClassName={"pagination-link"}
              nextLinkClassName={"pagination-link"}
              breakLinkClassName={"pagination-link"}
              disabledClassName={"pagination-item-disabled"}
              activeLinkClassName={"pagination-link-active"}
            />
            
          </HStack>
          
        </>
      )}
    </Container>
  );
};

export default Coins;
