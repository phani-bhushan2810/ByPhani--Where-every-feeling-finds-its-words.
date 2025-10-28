import React, { useState, useEffect, useMemo, CSSProperties, FC } from 'react';
import ReactDOM from 'react-dom/client';

// --- MOCK DATA ---
const initialStories = [
  {
    id: 1,
    title: "checkMATE",
    category: "Novels",
    content: `Prologue\nThe phone rang three times before Arjun picked up.\n"Hello?"\nSilence. Then breathing. Then a voice he hadn't heard in seven years.\n"Arjun. It's me."\nThe world stopped for a second. Traffic sounds faded. The coffee shop chatter became white noise.\n"Raghav?"\n"Yeah." A pause. "I know it's been... a while."\nArjun sat down slowly, his laptop forgotten. "A while? Try forever."\nA soft laugh came through the line — tired, but real. "I need to ask you something."\n"What?"\n"Do you still remember how to play?"\nArjun frowned. "Play what?"\n"Chess."\nThe word hung in the air like dust in afternoon light.\n"Of course I remember."\n"Good." Another pause. Longer this time. "Come over tomorrow. Six o'clock. My place."\n"Raghav, what's—"\n"Just come. Please."\nThe line went dead.\nArjun stared at his phone, at the name still glowing on the screen. Seven years of silence, and all Raghav wanted was a chess game.\n\nSomething felt wrong.\nSomething felt final.\n\nThe next evening, Arjun stood outside Raghav's apartment building, watching the sun bleed orange across the sky. The building was old — the kind with peeling paint and rusted balconies, where clotheslines stretched between windows like prayer flags.\nHe climbed the stairs slowly.\nThird floor. Door number 304.\nHe knocked.\nThe door opened, and there stood Raghav — thinner than Arjun remembered, his hair longer, his eyes carrying something heavy. But the smile was the same. That crooked, half-apologetic smile that used to get them out of trouble in school.\n"You came," Raghav said softly.\n"You called."\nThey stood there for a moment, two men who'd once been boys, now strangers wearing familiar faces.\n"Come in."\nThe apartment was small. A single room with a kitchenette in the corner, a bed pushed against the wall, and a window that looked out over the street. The evening light poured in, golden and thick.\nAnd there, by the window, sat a chessboard.\nAlready set. Waiting.\n"I thought we could play," Raghav said, moving toward it. "Like we used to."\nArjun followed, his eyes catching details he didn't want to see — the pill bottles on the side table, the way Raghav moved carefully, like his body was something fragile he had to carry.\nThey sat down across from each other.\nThe board between them looked ancient — the same one from their childhood, the wood worn smooth by a thousand games, the pieces chipped and faded.\n"White or black?" Raghav asked.\n"You choose."\n\nChapter 1 - The First Move\nThe pawn sat there on E4, small and unassuming.\nArjun stared at it, and suddenly he wasn't in this dim apartment anymore.\nHe was ten years old again...`,
    reviews: [{ user: "Reader_A", rating: 5, comment: "Absolutely captivating start!" }],
  },
  {
    id: 2,
    title: "Through the Brown Iron Gate",
    category: "Novels",
    content: `PART ONE: THE DREAMER\nChapter 1: Honeysuckle and Promises\nEldergrove smelled of rain-soaked earth and honeysuckle that spring. The scent clung to everything—the bakery's awnings, the cobbler's worn doorstep, even Chaitra's hair as she skipped beside her grandfather.\n"Slow down, Chai." His voice carried the rasp of age and affection. "The world won't disappear if you take your time."\nBut twelve-year-old Chaitra couldn't slow down. Her sandals slapped the uneven pavement, her braid a metronome keeping time with her excitement. Every corner of Eldergrove held a secret, and today Grandpa had promised her something special.\nThey passed Mrs. Nair's library, its roof sagging under years of monsoons. Through the window, Chaitra glimpsed rows of books—her favorites, the ones about knights and lost kingdoms. She waved. Mrs. Nair waved back, her glasses catching the light.\n"Where are we going?" Chaitra asked for the third time.\nGrandpa's eyes crinkled. Silver hair peeked from beneath his cap. "Somewhere stories live."...\n(The full text of the novel would be included here)`,
    reviews: [{ user: "Bookworm22", rating: 4, comment: "Incredible world-building." }],
  },
  {
    id: 3,
    title: "checkMATE (Screenplay)",
    category: "Screenplays",
    content: `Written by An Original Screenplay\nFADE IN:\nINT. ARJUN'S APARTMENT – EVENING\nRain taps against the window. ARJUN (32) sits on his couch, laptop open, half-empty coffee mug beside him. His phone buzzes. Unknown number. He hesitates, then answers.\nARJUN\nHello?\nSilence. Then a voice – familiar, distant, like an echo from another life.\nRAGHAV (V.O.)\n(softly)\nArjun.\nArjun freezes. His breath catches.\nARJUN\nRaghav?\nRAGHAV (V.O.)\nCome over. Let's play.\nARJUN\nPlay what?\nA pause. The rain grows louder.\nRAGHAV (V.O.)\nChess.\nThe line goes dead. Arjun stares at his phone, processing. Then he moves.\nCUT TO:\nEXT. RAGHAV'S BUILDING – EVENING\nArjun stands outside an old building, looking up. The paint is faded. A single light flickers in a third-floor window. He takes a breath and enters.`,
    reviews: [],
  },
  {
    id: 4,
    title: "checkMATE - A Film Pitch Deck",
    category: "Pitch Decks",
    content: `LOGLINE
Two childhood friends reunite after years apart to play one final game of chess — where each move unlocks a memory, and checkmate means goodbye forever.

GENRE
Drama | Emotional | Indie

Tone References:
October (2018), The Pursuit of Happyness, Dear Zindagi, Soul (Pixar)

SYNOPSIS
checkMATE is an intimate, poignant exploration of friendship, memory, and unspoken farewells.

RAGHAV (32) calls his estranged best friend ARJUN (32) after years of silence with a simple request: "Come over. Let's play."

When Arjun arrives at Raghav's modest apartment, he finds a chessboard waiting — the same game they played as children. What begins as nostalgic reminiscence becomes something far more profound.

As they move pieces across the board, each chess move triggers a flashback:
• Opening moves recall their innocent childhood — chalk chessboards in schoolyards, stolen samosas, endless laughter
• Middle game shows adolescence and early adulthood — college dreams, career struggles, romantic pursuits, and the slow drift of distance
• The queen falls — a pivotal moment that mirrors when Raghav learned he was dying (though this is never spoken, only shown through silence and symbolism)
• Endgame — Each remaining move grows heavier as Raghav weakens, his hands trembling, his breath shallow

Through visual storytelling and minimal dialogue, we gradually understand what Arjun is slowly realizing: this isn't just a game. It's a goodbye.

Raghav hides a terminal illness. He never says the words. He doesn't need to. His thinning frame, labored breathing, and the weight of each chess move tell the story.

When checkmate comes, Raghav's king falls — and so does he. The game ends. The life ends. Simultaneously. Silently.

In the epilogue, morning light fills the empty room. Arjun sits alone at the chessboard, one side vacant, one frozen. He whispers softly: "Your move, mate."

THEMES
- Friendship & Loyalty — The bonds that transcend time and distance
- Mortality & Acceptance — Facing death with quiet dignity
- Memory & Nostalgia — How our past shapes our present
- Regret & Reconciliation — The things left unsaid until it's almost too late
- Symbolism — Life as a game where every move matters

VISUAL & CINEMATIC STYLE
Color Palette:
• Flashbacks: Warm golden tones, soft sunlight, vibrant colors of youth
• Present Day: Cool, desaturated blues and grays, amber lamplight, intimate shadows

Cinematography:
• Static, contemplative frames for the chess game
• Handheld, energetic camera for childhood memories
• Slow zooms and long takes for emotional weight
• Natural lighting throughout — rain, dusk, dawn

Sound Design:
• Minimal score: Piano, rain, distant city hums
• Chess pieces sliding across wood as sonic punctuation
• Long stretches of silence that speak louder than dialogue

Editing:
• Seamless transitions between past and present
• Each chess move acts as a narrative portal
• Match cuts between childhood and adulthood
• The present-day scenes slow as Raghav weakens

CHARACTER BREAKDOWN
RAGHAV (32)
• An architect who never got to build his dream
• Gentle, introspective, carrying a terminal secret with grace
• Once vibrant, now physically diminished but emotionally present
• His love language: quiet gestures, nostalgic games, unspoken truths

ARJUN (32)
• A lawyer who chased success abroad and lost connection to home
• Carries guilt for abandoning his best friend
• Slowly realizes throughout the game what Raghav cannot say
• His journey: from oblivious visitor to devastated witness

WHY THIS STORY MATTERS
In a world obsessed with loud drama and high stakes, checkMATE offers something rare: quiet devastation.

This is a film about:
• The friendships we take for granted
• The conversations we postpone until it's too late
• The dignity of facing mortality without melodrama
• How a simple game can carry the weight of an entire relationship

It's intimate. Two actors. One room. A chessboard.
It's universal. Everyone has lost someone or fears losing someone.
It's cinematic. Every frame, every silence, every move tells the story.

This is the kind of film that:
• Makes audiences sit through the credits in silence
• Sparks conversations about life, death, and friendship
• Travels well to international film festivals
• Resonates across cultures through its visual storytelling

TARGET AUDIENCE
• Primary: Adults 25-45 who appreciate character-driven, emotional cinema
• Secondary: Festival audiences, indie film enthusiasts, fans of thoughtful dramas
• International Appeal: Universal themes transcend language barriers

CLOSING STATEMENT
Some stories don't need explosions to leave an impact.
Some stories don't need big budgets to break hearts.
checkMATE is one of them.

Two friends. One game. A lifetime of memories.
And a goodbye that will stay with you forever.

In memory of all the games we never finished,
and the friends who taught us how to play.
`,
    reviews: [],
  },
];

// --- TYPES ---
type Review = { user: string; rating: number; comment: string };
type Story = { id: number; title: string; category: string; content: string; reviews: Review[] };
type User = { name: string; isAdmin?: boolean };

// --- HELPER FUNCTIONS ---
const generateCardStyle = (title: string) => {
    const hash = title.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const h = (hash % 60) + 10; // Warm tones: yellows, oranges, reds
    return { 
        borderImageSource: `linear-gradient(to top, hsl(${h}, 50%, 40%), hsl(${h}, 60%, 60%))`,
        borderImageSlice: 1,
        borderLeft: '4px solid',
    };
};

const generateCoverArtStyle = (title: string) => {
    const hash = title.split('').reduce((acc, char) => char.charCodeAt(0) + ((acc << 5) - acc), 0);
    const h1 = (hash % 60) + 10;
    const h2 = (h1 + 40) % 360;
    return {
        background: `linear-gradient(135deg, hsl(${h1}, 20%, 15%), hsl(${h2}, 25%, 25%))`,
    };
}

// --- COMPONENTS ---

const Header = ({ setPage, user, onLogout, onLoginRegister }: { setPage: (page: string) => void; user: User | null; onLogout: () => void; onLoginRegister: () => void; }) => {
    return (
        <header style={styles.header}>
            <div style={styles.logoContainer} onClick={() => setPage('home')}>
                <h1 style={styles.logoTitle}>ByPhani</h1>
                <p style={styles.tagline}>Where every feeling finds its words.</p>
            </div>
            <nav style={styles.nav}>
                <a href="#home" onClick={(e) => { e.preventDefault(); setPage('home'); }}>Home</a>
                <a href="#library" onClick={(e) => { e.preventDefault(); setPage('library'); }}>Library</a>
                {user?.isAdmin && <a href="#admin" onClick={(e) => { e.preventDefault(); setPage('admin'); }}>Admin</a>}
                <a href="#contact" onClick={(e) => { e.preventDefault(); setPage('contact'); }}>Contact</a>
                <div style={{display: 'flex', alignItems: 'center', gap: '1rem'}}>
                  {user ? (
                    <>
                      <span style={{fontSize: '0.9rem', color: '#ccc'}}>Welcome, {user.name}!</span>
                      <button onClick={onLogout} style={styles.authButton}>Logout</button>
                    </>
                  ) : (
                    <button onClick={onLoginRegister} style={styles.authButton}>Login / Register</button>
                  )}
                </div>
            </nav>
        </header>
    );
};

const HomePage = ({ setPage }: { setPage: (page: string) => void }) => (
    <div style={styles.homeContainer} className="fade-in">
        <h2 style={styles.homeTitle}>ByPhani</h2>
        <p style={styles.homeTagline}>Where every feeling finds its words.</p>
        <button onClick={() => setPage('library')} style={{marginTop: '2rem', padding: '0.8rem 1.8rem', fontSize: '1.1rem'}}>Explore The Library</button>
    </div>
);

type StoryCardProps = { story: Story; onSelect: (id: number) => void; };
// FIX: Explicitly typed StoryCard as a React.FC (FunctionComponent). This helps TypeScript correctly
// understand that 'key' is a special prop used by React for list rendering. Previously, TypeScript
// was incorrectly treating 'key' as a regular prop, leading to a type error because it's not
// defined in StoryCardProps.
const StoryCard: FC<StoryCardProps> = ({ story, onSelect }) => {
    const cardStyle = useMemo(() => generateCardStyle(story.title), [story.title]);
    return (
        <div style={{ ...styles.storyCard, ...cardStyle }} onClick={() => onSelect(story.id)}>
            <h3 style={styles.cardTitle}>{story.title}</h3>
            <p style={styles.cardCategory}>{story.category}</p>
            <p style={styles.cardSnippet}>{story.content.substring(0, 100)}...</p>
        </div>
    );
};

const LibraryPage = ({ stories, setPage, setSelectedStoryId }: { stories: Story[]; setPage: (page: string) => void; setSelectedStoryId: (id: number) => void; }) => {
    const [filter, setFilter] = useState('All');
    const categories = ['All', 'Stories', 'Novels', 'Screenplays', 'Pitch Decks'];

    const filteredStories = stories.filter(story => filter === 'All' || story.category === filter);

    const handleSelectStory = (id: number) => {
        setSelectedStoryId(id);
        setPage('story');
    };

    return (
        <div style={styles.pageContainer} className="fade-in">
            <h2 style={styles.pageTitle}>Library</h2>
            <div style={styles.filterContainer}>
                {categories.map(cat => (
                    <button 
                        key={cat} 
                        onClick={() => setFilter(cat)}
                        style={{...styles.filterButton, ...(filter === cat ? styles.activeFilter : {})}}
                    >
                        {cat}
                    </button>
                ))}
            </div>
            <div style={styles.storyGrid}>
                {filteredStories.map(story => (
                    <StoryCard key={story.id} story={story} onSelect={handleSelectStory} />
                ))}
            </div>
        </div>
    );
};

const StarRating = ({ value, onChange, readOnly = false }: { value: number; onChange?: (val: number) => void; readOnly?: boolean }) => (
  <div>
    {[...Array(5)].map((_, i) => (
      <span key={i} style={{...styles.star, cursor: readOnly ? 'default' : 'pointer'}} onClick={() => !readOnly && onChange?.(i + 1)}>
        {i < value ? '★' : '☆'}
      </span>
    ))}
  </div>
);

const StoryDetailPage = ({ story, user, onLoginPrompt, onAddReview }: { story: Story | undefined; user: User | null; onLoginPrompt: () => void; onAddReview: (id: number, review: Review) => void; }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    if (!story) return <div style={styles.pageContainer}>Story not found.</div>;

    const isPreview = !user;
    const previewContent = story.content.substring(0, 250) + '...';

    const handleSubmitReview = (e: React.FormEvent) => {
        e.preventDefault();
        if (user && comment && rating > 0) {
            onAddReview(story.id, { user: user.name, rating, comment });
            setComment('');
            setRating(0);
        }
    };

    const coverArtStyle = useMemo(() => generateCoverArtStyle(story.title), [story.title]);
    
    return (
        <div style={styles.pageContainer} className="fade-in">
            <div style={{...styles.storyCoverArt, ...coverArtStyle}}>
                <h2 style={styles.storyTitle}>{story.title}</h2>
                <p style={styles.storyCategory}>{story.category}</p>
            </div>
            <div 
              style={styles.storyContent} 
              className="no-select"
              onContextMenu={(e) => e.preventDefault()}
            >
                {isPreview ? <p>{previewContent}</p> : <p style={{whiteSpace: 'pre-wrap'}}>{story.content}</p>}
            </div>

            {isPreview && (
                <div style={styles.loginPrompt}>
                    <p>This is just a preview.</p>
                    <button onClick={onLoginPrompt}>Register or Login to continue reading</button>
                </div>
            )}
            
            <div style={styles.reviewsSection}>
              <h3 style={styles.reviewsTitle}>Reviews & Feedback</h3>
              {story.reviews.length === 0 ? <p>Be the first to leave a review.</p> : (
                story.reviews.map((review, index) => (
                  <div key={index} style={styles.review}>
                    <p><strong>{review.user}</strong></p>
                    <StarRating value={review.rating} readOnly={true} />
                    <p style={{marginTop: '0.5rem'}}>{review.comment}</p>
                  </div>
                ))
              )}

              {user ? (
                <form onSubmit={handleSubmitReview} style={styles.reviewForm}>
                  <h4>Leave a Review</h4>
                   <StarRating value={rating} onChange={setRating}/>
                  <textarea 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows={4}
                    style={{marginTop: '1rem'}}
                  ></textarea>
                  <button type="submit" style={{marginTop: '1rem'}}>Submit Review</button>
                </form>
              ) : (
                <p style={{marginTop: '2rem'}}>Please log in to leave a review.</p>
              )}
            </div>
        </div>
    );
};

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  }
  return (
    <div style={styles.pageContainer} className="fade-in">
      <h2 style={styles.pageTitle}>Contact</h2>
      {submitted ? (
        <p style={{textAlign: 'center'}}>Thank you for your message! I'll get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.contactForm}>
          <p>For collaborations, questions, or just to say hello.</p>
          <input type="text" placeholder="Your Name" required/>
          <input type="email" placeholder="Your Email" required/>
          <textarea placeholder="Your Message" rows={6} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
  );
};

const AdminDashboard = ({ stories, setStories }: { stories: Story[]; setStories: React.Dispatch<React.SetStateAction<Story[]>> }) => {
    const [editingStory, setEditingStory] = useState<Story | null>(null);

    const handleAddStory = () => {
        setEditingStory({ id: Date.now(), title: '', category: 'Stories', content: '', reviews: [] });
    };

    const handleDeleteStory = (id: number) => {
        if (window.confirm('Are you sure you want to delete this story?')) {
            setStories(prev => prev.filter(story => story.id !== id));
        }
    };

    const handleSaveStory = (storyToSave: Story) => {
        setStories(prev => {
            const exists = prev.some(s => s.id === storyToSave.id);
            if (exists) {
                return prev.map(s => s.id === storyToSave.id ? storyToSave : s);
            }
            return [...prev, storyToSave];
        });
        setEditingStory(null);
    };

    if (editingStory) {
        return <StoryEditor story={editingStory} onSave={handleSaveStory} onCancel={() => setEditingStory(null)} />;
    }

    return (
        <div style={styles.pageContainer} className="fade-in">
            <h2 style={styles.pageTitle}>Admin Dashboard</h2>
            <button onClick={handleAddStory} style={{marginBottom: '2rem'}}>Add New Story</button>
            <div>
                {stories.map(story => (
                    <div key={story.id} style={styles.adminStoryItem}>
                        <span>{story.title} ({story.category})</span>
                        <div>
                            <button onClick={() => setEditingStory(story)} style={{marginRight: '0.5rem'}}>Edit</button>
                            <button onClick={() => handleDeleteStory(story.id)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const StoryEditor = ({ story, onSave, onCancel }: { story: Story; onSave: (story: Story) => void; onCancel: () => void; }) => {
    const [currentStory, setCurrentStory] = useState(story);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setCurrentStory(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(currentStory);
    };

    return (
        <div style={styles.pageContainer} className="fade-in">
            <h2 style={styles.pageTitle}>{story.id > 1000 ? 'Edit Story' : 'Add Story'}</h2>
            <form onSubmit={handleSubmit} style={styles.contactForm}>
                <label>Title</label>
                <input type="text" name="title" value={currentStory.title} onChange={handleChange} required />
                
                <label>Category</label>
                <select name="category" value={currentStory.category} onChange={handleChange} style={styles.selectInput}>
                    <option>Stories</option>
                    <option>Novels</option>
                    <option>Screenplays</option>
                    <option>Pitch Decks</option>
                </select>

                <label>Content</label>
                <textarea name="content" value={currentStory.content} onChange={handleChange} rows={15} required></textarea>
                
                <div style={{display: 'flex', gap: '1rem', marginTop: '1rem'}}>
                    <button type="submit">Save Story</button>
                    <button type="button" onClick={onCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

const AuthModal = ({ onLogin, onClose }: { onLogin: (user: User) => void; onClose: () => void; }) => {
    const [isRegister, setIsRegister] = useState(false);
    const [email, setEmail] = useState('');

    const handleAuth = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock login: specific user is admin, others are regular users
        if (email === 'admin@byphani.com') {
            onLogin({ name: "Phani", isAdmin: true });
        } else {
            onLogin({ name: email.split('@')[0] });
        }
    };

    return (
        <div style={styles.modalOverlay} onClick={onClose}>
            <div style={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                <button style={styles.closeButton} onClick={onClose}>&times;</button>
                <h3 style={{textAlign: 'center', marginBottom: '1.5rem'}}>{isRegister ? "Create Account" : "Welcome Back"}</h3>
                <form onSubmit={handleAuth} style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <input type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password (any)" required />
                    {isRegister && <input type="password" placeholder="Confirm Password" required />}
                    <button type="submit">{isRegister ? "Register" : "Login"}</button>
                </form>
                <p style={{textAlign: 'center', marginTop: '1rem', fontSize: '0.9rem'}}>
                    (Use <code style={{color: 'var(--primary-color)'}}>admin@byphani.com</code> to access Admin Dashboard)
                </p>
                <p style={{textAlign: 'center', marginTop: '1rem'}}>
                    {isRegister ? "Already have an account? " : "Don't have an account? "}
                    <a href="#" onClick={(e) => {e.preventDefault(); setIsRegister(!isRegister)}}>
                        {isRegister ? "Login" : "Register"}
                    </a>
                </p>
            </div>
        </div>
    );
};

const App = () => {
    const [page, setPage] = useState('home');
    const [stories, setStories] = useState<Story[]>(initialStories);
    const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const handleLogin = (userData: User) => {
        setUser(userData);
        setShowAuthModal(false);
    };
    const handleLogout = () => setUser(null);

    const handleAddReview = (storyId: number, review: Review) => {
      setStories(prevStories => 
        prevStories.map(story => 
          story.id === storyId ? {...story, reviews: [...story.reviews, review]} : story
        )
      );
    }
    
    const renderPage = () => {
        switch (page) {
            case 'library':
                return <LibraryPage stories={stories} setPage={setPage} setSelectedStoryId={setSelectedStoryId} />;
            case 'story':
                const story = stories.find(s => s.id === selectedStoryId);
                return <StoryDetailPage story={story} user={user} onLoginPrompt={() => setShowAuthModal(true)} onAddReview={handleAddReview} />;
            case 'contact':
                return <ContactPage />;
            case 'admin':
                return user?.isAdmin ? <AdminDashboard stories={stories} setStories={setStories} /> : <HomePage setPage={setPage} />;
            case 'home':
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <>
            <Header 
              setPage={setPage} 
              user={user} 
              onLogout={handleLogout} 
              onLoginRegister={() => setShowAuthModal(true)} 
            />
            <main style={styles.mainContent}>
                {renderPage()}
            </main>
            {showAuthModal && <AuthModal onLogin={handleLogin} onClose={() => setShowAuthModal(false)} />}
        </>
    );
};

// --- STYLES ---

const styles: { [key: string]: CSSProperties } = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        backgroundColor: 'rgba(26, 26, 26, 0.7)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid var(--border-color)`,
        position: 'sticky',
        top: 0,
        zIndex: 100,
    },
    logoContainer: { cursor: 'pointer' },
    logoTitle: { fontFamily: 'var(--font-title)', fontSize: '2rem', color: 'var(--primary-color)', margin: 0 },
    tagline: { margin: 0, fontSize: '0.8rem', color: 'var(--text-color)' },
    nav: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
    authButton: { padding: '0.3rem 0.8rem', fontSize: '0.9rem', backgroundColor: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--primary-color)', borderRadius: '4px' },
    mainContent: { flex: 1, padding: '2rem' },
    homeContainer: { display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 85px)', textAlign: 'center' },
    homeTitle: { fontFamily: 'var(--font-title)', fontSize: ' clamp(3.5rem, 10vw, 7rem)', color: 'var(--primary-color)', textShadow: '0 0 15px rgba(201, 164, 105, 0.3)' },
    homeTagline: { fontSize: 'clamp(1rem, 3vw, 1.5rem)', marginTop: '0.5rem', color: '#ccc' },
    pageContainer: { maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' },
    pageTitle: { fontFamily: 'var(--font-title)', fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '2rem', textAlign: 'center', fontWeight: 'normal' },
    filterContainer: { display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' },
    filterButton: { borderRadius: '20px', border: '1px solid var(--border-color)' },
    activeFilter: { backgroundColor: 'var(--primary-color)', color: 'var(--background-color)', borderColor: 'var(--primary-color)' },
    storyGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' },
    storyCard: { backgroundColor: 'var(--secondary-color)', padding: '1.5rem', borderRadius: '4px', cursor: 'pointer', transition: 'transform 0.3s ease, box-shadow 0.3s ease', border: '1px solid var(--border-color)' },
    cardTitle: { fontFamily: 'var(--font-title)', color: 'var(--primary-color)', marginBottom: '0.5rem', fontSize: '1.5rem' },
    cardCategory: { fontStyle: 'italic', color: '#999', marginBottom: '1rem' },
    cardSnippet: { fontSize: '0.9rem', color: '#ccc' },
    storyCoverArt: { padding: '3rem 2rem', borderRadius: '4px', marginBottom: '2rem', textAlign: 'center' },
    storyTitle: { fontFamily: 'var(--font-title)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' },
    storyCategory: { textAlign: 'center', fontStyle: 'italic', color: '#ddd', marginBottom: '2rem', marginTop: '0.5rem' },
    storyContent: { fontSize: '1.1rem', lineHeight: '1.9', paddingLeft: '1.5rem', borderLeft: '3px solid var(--border-color)' },
    loginPrompt: { textAlign: 'center', marginTop: '3rem', padding: '2rem', backgroundColor: 'var(--secondary-color)', borderRadius: '4px' },
    reviewsSection: { marginTop: '4rem', borderTop: '1px solid var(--border-color)', paddingTop: '2rem' },
    reviewsTitle: { fontFamily: 'var(--font-title)', color: 'var(--primary-color)', marginBottom: '1.5rem', fontWeight: 'normal' },
    review: { backgroundColor: 'rgba(0,0,0,0.1)', padding: '1rem', borderRadius: '4px', marginBottom: '1rem', border: '1px solid var(--border-color)' },
    reviewForm: { marginTop: '2rem', padding: '1.5rem', border: '1px solid var(--border-color)', borderRadius: '4px' },
    star: { fontSize: '1.5rem', color: 'var(--primary-color)' },
    contactForm: { display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '500px', margin: '0 auto' },
    selectInput: { fontFamily: 'var(--font-body)', padding: '0.75rem', backgroundColor: 'var(--secondary-color)', border: '1px solid var(--border-color)', color: 'var(--text-color)', borderRadius: '4px', width: '100%' },
    adminStoryItem: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: 'var(--secondary-color)', borderRadius: '4px', marginBottom: '1rem' },
    modalOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.8)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 },
    modalContent: { backgroundColor: '#2a2a2a', padding: '2rem', borderRadius: '8px', width: '90%', maxWidth: '400px', position: 'relative', border: '1px solid var(--border-color)' },
    closeButton: { position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: 'var(--text-color)', fontSize: '1.5rem', cursor: 'pointer' },
};

// --- RENDER APP ---
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);