import "./Build.css";
import Waybar from "../components/Waybar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Build() {
  const [cart, setCart] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem("cart") || "[]");
      return Array.isArray(raw) ? raw : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    function onStorage(e) {
      if (e.key === "cart") {
        try {
          const parsed = JSON.parse(e.newValue || "[]");
          setCart(Array.isArray(parsed) ? parsed : []);
        } catch {
          setCart([]);
        }
      }
    }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  // look up the selected item for each component slot
  const cpuItem = cart.find((it) => it.type === "cpu");
  const motherboardItem = cart.find((it) => it.type === "motherboard");
  const memoryItem = cart.find((it) => it.type === "memory");
  const storageItem = cart.find((it) => it.type === "storage");

  return (
    <>
      <Waybar />
      <div className="buildPage">
        <h1 className="build_title">Choose Your Parts</h1>

        <div className="buildTable">
          {/* CPU row */}
          <div className="buildRow">
            <div className="buildRowLabel">CPU</div>
            <div className="buildRowSelection">
              {cpuItem ? (
                <div className="buildRowPart">
                  <span className="partName">{cpuItem.name}</span>
                  <span className="partQty">x{cpuItem.qty}</span>
                </div>
              ) : (
                <Link to="/products/cpu" className="chooseBtn">
                  + Choose a CPU
                </Link>
              )}
            </div>
          </div>

          {/* Motherboard row */}
          <div className="buildRow">
            <div className="buildRowLabel">Motherboard</div>
            <div className="buildRowSelection">
              {motherboardItem ? (
                <div className="buildRowPart">
                  <span className="partName">{motherboardItem.name}</span>
                  <span className="partQty">x{motherboardItem.qty}</span>
                </div>
              ) : (
                <Link to="/products/moth" className="chooseBtn">
                  + Choose a Motherboard
                </Link>
              )}
            </div>
          </div>

          {/* Memory row */}
          <div className="buildRow">
            <div className="buildRowLabel">Memory</div>
            <div className="buildRowSelection">
              {memoryItem ? (
                <div className="buildRowPart">
                  <span className="partName">{memoryItem.name}</span>
                  <span className="partQty">x{memoryItem.qty}</span>
                </div>
              ) : (
                <Link to="/products/memory" className="chooseBtn">
                  + Choose Memory
                </Link>
              )}
            </div>
          </div>

          {/* Storage row */}
          <div className="buildRow">
            <div className="buildRowLabel">Storage</div>
            <div className="buildRowSelection">
              {storageItem ? (
                <div className="buildRowPart">
                  <span className="partName">{storageItem.name}</span>
                  <span className="partQty">x{storageItem.qty}</span>
                </div>
              ) : (
                <Link to="/products/storage" className="chooseBtn">
                  + Choose Storage
                </Link>
              )}
            </div>
          </div>

          {/* Add more component rows here (GPU, PSU, Case, etc.) with their own types */}
        </div>
      </div>
    </>
  );
}

export default Build;
