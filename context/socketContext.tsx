import React, {useEffect, useState} from 'react';
import {Socket} from 'phoenix';

// @ts-ignore
export const SocketContext = React.createContext();

interface SocketProviderProps {
  children: JSX.Element;
  options: Record<string, any>;
  url: string;
}

export const SocketProvider = ({children, options, url}: SocketProviderProps) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const s = new Socket(url, options);
    s.connect();
    setSocket(s);

    return () => {
      s.disconnect();
      setSocket(null);
    };
  }, [options, url]);

  const props = {
    value: {
      socket,
    },
  };

  return React.createElement(SocketContext.Provider, props, children);
}