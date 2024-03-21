import { createLazyFileRoute } from "@tanstack/react-router";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/Select";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export const Route = createLazyFileRoute("/settings/settings")({
  component: () => <Settings />,
});

function Settings() {
  const byBitKeysSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const submittedBybitKey = formData.get("bybitKey");
    const submittedBybitSecret = formData.get("bybitSecret");

    console.log("submittedBybitKey", submittedBybitKey);
    console.log("submittedBybitSecret", submittedBybitSecret);
  };

  const indexedDB = window.indexedDB;

  const request = indexedDB.open("ByBit", 1);

  request.onerror = function (e) {
    console.log("An error occurred with IndexedDb", e);
  };

  request.onupgradeneeded = function () {
    const db = request.result;

    try {
      const store = db.createObjectStore("user", { keyPath: "id" });
      store.createIndex("bybit_keys", ["bybitKeys"], { unique: false });
      store.createIndex("bybit_secret", ["secret"], { unique: false });
      console.log("Object store 'user' created successfully.");
    } catch (error) {
      console.error("Error creating object store:", error);
    }
  };

  request.onsuccess = function () {
    const db = request.result;
    const transaction = db.transaction("user", "readwrite");

    const store = transaction.objectStore("user");

    store.put({ id: 1, keys: "bybitKeys", secret: "bybitSecret" });

    const idQuery = store.get(1);

    idQuery.onsuccess = () => {
      console.log("idQuery", idQuery.result);
    };

    transaction.oncomplete = () => {
      db.close();
    };
  };

  return (
    <div>
      <h2>Global setting</h2>
      <Select name="language" defaultValue="english">
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem key="english" value="English">
            English
          </SelectItem>
          <SelectItem key="germany" value="germany">
            Germany
          </SelectItem>
        </SelectContent>
      </Select>

      <hr />

      <h2>ByBit keys</h2>
      <form method="post" onSubmit={byBitKeysSubmit}>
        <Input
          className="w-full"
          name="bybitKey"
          autoComplete="off"
          // defaultValue={timer.task ?? ''}
          defaultValue=""
          placeholder="Input Bybit key"
        />

        <Input
          className="w-full"
          name="bybitSecret"
          autoComplete="off"
          // defaultValue={timer.task ?? ''}
          defaultValue=""
          placeholder="Input Bybit secret"
        />
        <div>
          <Button type="submit">Send the file</Button>
        </div>
      </form>
    </div>
  );
}
