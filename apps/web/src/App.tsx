import { useState } from 'react';
import { AppContainer } from './components/ui/AppContainer';
import { AppHeader } from './components/ui/AppHeader';
import { TabsNav, type TabId } from './components/ui/TabsNav';

export function App() {
  // Guarda qual aba está selecionada no momento (começa em 'lista')
  const [activeTab, setActiveTab] = useState<TabId>('lista');

  return (
    <div className="min-h-screen bg-stone-200">
      <AppContainer>
        <AppHeader>
          <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />
        </AppHeader>

        <main className="flex-1 p-4">
          {activeTab === 'lista' && (
            <p className="text-stone-700">Conteúdo da aba Lista</p>
          )}
          {activeTab === 'compra' && (
            <p className="text-stone-700">Conteúdo da aba Compra</p>
          )}
          {activeTab === 'painel' && (
            <p className="text-stone-700">Conteúdo da aba Painel</p>
          )}
        </main>
      </AppContainer>
    </div>
  );
}

export default App;