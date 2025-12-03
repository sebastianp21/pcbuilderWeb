import "./Moth.css";
import Waybar from "../../components/Waybar";
import Specsbar from "../../components/Specsbar";
import { useEffect, useState } from "react";

function Moth() {
  const [cpus, setCpus] = useState([]);

  // local cart state synced with localStorage (same pattern as Cpu.jsx)
  const [cart, setCart] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!Array.isArray(raw)) return [];
      return raw;
    } catch (e) {
      return [];
    }
  });

  useEffect(() => {
    fetch("/api/cpu/sortbyName")
      .then((res) => res.json())
      .then((data) => setCpus(data));
  }, []);

  function addToCart(board) {
    const id = board?.opendb_id ?? board?.metadata?.id ?? board?.id ?? null;
    const name = board?.metadata?.name ?? board?.name ?? "Unknown Motherboard";
    if (!id) {
      console.error("Motherboard has no id, cannot add to cart", board);
      return;
    }

    const existingIndex = cart.findIndex((item) => item.id === id);
    let newCart;

    if (existingIndex >= 0) {
      // bump quantity and ensure type is set
      newCart = cart.map((item, i) =>
        i === existingIndex
          ? { ...item, qty: (item.qty || 1) + 1, type: "motherboard" }
          : item
      );
    } else {
      // NEW cart item – tag as motherboard
      newCart = [...cart, { id, name, qty: 1, type: "motherboard" }];
    }

    setCart(newCart);
    try {
      localStorage.setItem("cart", JSON.stringify(newCart));
    } catch (e) {
      console.error("Could not save cart to localStorage", e);
    }
    console.log("Added motherboard to cart:", {
      id,
      name,
      type: "motherboard",
    });
  }

  return (
    <>
      <Waybar />
      <div className="land_p">
        <div className="land_p_title">
          <h1 className="p_title">Motherboards</h1>
        </div>

        <div className="cpu_productsUI">
          <Specsbar />

          <div className="cpu_products">
            {cpus.map((cpu, index) => {
              const keyId =
                cpu?.opendb_id ?? cpu?.metadata?.id ?? cpu?.id ?? index;
              return (
                <div className="cpu_item_row" key={keyId}>
                  <div className="cpu_item_specs">{cpu.metadata.name}</div>
                  <div className="cpu_item_specs">{cpu.cores.total}</div>
                  <div className="cpu_item_specs">
                    {cpu.clocks.performance.base}
                  </div>
                  <div className="cpu_item_specs">
                    {cpu.clocks.performance.boost}
                  </div>
                  <div className="cpu_item_specs">{cpu.microarchitecture}</div>
                  <div className="cpu_item_specs">
                    Price
                    <button
                      type="button"
                      onClick={() => addToCart(cpu)}
                      style={{ marginLeft: "8px" }}
                    >
                      🛒 Add
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Moth;
